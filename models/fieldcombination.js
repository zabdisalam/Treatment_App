const mongoose = require('mongoose');

const FieldsSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: true
  },
  Favourite_Subject: {
    type: String,
    required: true
  },
  Hobbies: {
    type: String,
    required: true
  },
  Intensity: {
    type: String,
    required: true
  },
  Probability_of_getting_a_job_after_four_years: {
    type: String,
    required: true
  },
  Preferred_workspace: {
    type: String,
    required: true
  },
  Description:{
  type: String,
  required: true
 },
 Top_Programs: {
  type: Object,
  required: true
 }
});

const Fieldcombination = mongoose.model('Fieldcombination', FieldsSchema);

module.exports = Fieldcombination;