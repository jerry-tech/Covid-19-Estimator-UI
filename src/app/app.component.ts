import { Component } from '@angular/core';
import { Covid } from './covid.model';
import { stringify } from 'querystring';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'covid19EstimatorUi';
  hasdataperiodtype = false;
  model = new Covid('', '', '', '', 'default');
  
  currimpactinfectx: any;
  infectbytimex: any;
  severbytimex: any;
  hospitalbedsx: any;
  icutimex: any;
  venttimex: any;
  dollarfilx: any;

  currimpactinfecty: bigint;
  infectbytimey: bigint;
  severbytimey: bigint;
  hospitalbedsy: bigint;
  icutimey: bigint;
  venttimey: bigint;
  dollarfily: bigint;

  validatePeriodType(value) {
    if (value === 'default') {
      this.hasdataperiodtype = true;
    } else {
      this.hasdataperiodtype = false;
    }
  }

  covid19ImpactEstimator(form: NgForm) {
  
    const data = {
      region: {
        name: 'Africa',
        avgAge: 19.7,
        avgDailyIncomeInUSD: 4,
        avgDailyIncomePopulation: 0.73
      },
      periodType: this.model.data_period_type,
      timeToElapse: this.model.data_time_to_elapse,
      reportedCases: this.model.data_reported_cases,
      population: this.model.data_population,
      totalHospitalBeds: this.model.data_total_hospital_beds

    };
    const realData = data;
    const record = {
      data: realData,
      impact: {
        currentlyInfected: null,
        infectionsByRequestedTime: null,
        severeCasesByRequestedTime: null,
        hospitalBedsByRequestedTime: null,
        casesForICUByRequestedTime: null,
        casesForVentilatorsByRequestedTime: null,
        dollarsInFlight: null
      },
      severeImpact: {
        currentlyInfected: null,
        infectionsByRequestedTime: null,
        severeCasesByRequestedTime: null,
        hospitalBedsByRequestedTime: null,
        casesForICUByRequestedTime: null,
        casesForVentilatorsByRequestedTime: null,
        dollarsInFlight: null
      }
    };
    
    record.impact.currentlyInfected = data.reportedCases * 10;
    this.currimpactinfectx = record.impact.currentlyInfected;
    record.severeImpact.currentlyInfected = data.reportedCases * 50;
    this.currimpactinfecty = record.severeImpact.currentlyInfected;

    // infectionsByRequestedTime for impact && severeImpact
    let calDay = null;
    const period = data.timeToElapse;
    if (data.periodType === 'days') {
      calDay = period;
    } else if (data.periodType === 'weeks') {
      calDay = period * 7;
    } else if (data.periodType === 'months') {
      calDay = period * 30;
    }
    const factor = Math.trunc(calDay / 3);
    record.impact.infectionsByRequestedTime = Math.trunc(record.impact.currentlyInfected
      * (2 ** factor));
    this.infectbytimex = record.impact.infectionsByRequestedTime;
    record.severeImpact.infectionsByRequestedTime = Math.trunc(record.severeImpact.currentlyInfected
      * (2 ** factor));
    this.infectbytimey = record.severeImpact.infectionsByRequestedTime;

    // 15% percent calculation of impact and severe impact
    record.impact.severeCasesByRequestedTime = Math.trunc(0.15
      * record.impact.infectionsByRequestedTime);
    this.severbytimex = record.impact.severeCasesByRequestedTime;

    record.severeImpact.severeCasesByRequestedTime = Math.trunc(0.15
      * record.severeImpact.infectionsByRequestedTime);
    this.severbytimey = record.severeImpact.severeCasesByRequestedTime;

    // total number of hospitalBedsByRequestedTime for impact && severe impact
    record.impact.hospitalBedsByRequestedTime = Math.trunc((0.35 * data.totalHospitalBeds)
      - record.impact.severeCasesByRequestedTime);
    this.hospitalbedsx = record.impact.hospitalBedsByRequestedTime;

    record.severeImpact.hospitalBedsByRequestedTime = Math.trunc((0.35 * data.totalHospitalBeds)
      - record.severeImpact.severeCasesByRequestedTime);
    this.hospitalbedsy = record.severeImpact.hospitalBedsByRequestedTime;

    // casesForICUByRequestedTime for impact && severe impact
    record.impact.casesForICUByRequestedTime = Math.trunc(0.05
      * record.impact.infectionsByRequestedTime);
    this.icutimex = record.impact.casesForICUByRequestedTime;

    record.severeImpact.casesForICUByRequestedTime = Math.trunc(0.05
      * record.severeImpact.infectionsByRequestedTime);
    this.icutimey = record.severeImpact.casesForICUByRequestedTime;

    // casesForVentilatorsByRequestedTime for impact && severe impact
    record.impact.casesForVentilatorsByRequestedTime = Math.trunc(0.02
      * record.impact.infectionsByRequestedTime);
    this.venttimex = record.impact.casesForVentilatorsByRequestedTime;

    record.severeImpact.casesForVentilatorsByRequestedTime = Math.trunc(0.02
      * record.severeImpact.infectionsByRequestedTime);
    this.venttimey = record.impact.casesForVentilatorsByRequestedTime;

    // estimation of how much money the economy is likely to lose daily form impact && severe impact
    record.impact.dollarsInFlight = Math.trunc((record.impact.infectionsByRequestedTime
      * data.region.avgDailyIncomePopulation * data.region.avgDailyIncomeInUSD) / calDay);
    this.dollarfilx = record.impact.dollarsInFlight;

    record.severeImpact.dollarsInFlight = Math.trunc((record.severeImpact.infectionsByRequestedTime
      * data.region.avgDailyIncomePopulation * data.region.avgDailyIncomeInUSD) / calDay);
    this.dollarfily = record.severeImpact.dollarsInFlight;

  }


}
