import HTTP from '../http';

const snakeCaseToCamelCase = str => str.replace(/_\w/g, m => m[1].toUpperCase());

const convertObjectFromSnakeToCamelCase = obj =>
  Object.keys(obj).reduce((acc, key) => {
    acc[snakeCaseToCamelCase(key)] = obj[key];
    return acc;
  }, {});

/**
 * return all customers
 */
function getCustomers() {
  return HTTP.get('/customers', {}).then(response => response.data.customers);
}

/**
 * return all drugs
 */
function getDrugs() {
  return HTTP.get('/drugs', {}).then(response => response.data.results);
}

/**
 * return all trellis therapeutic classes.
 */
function getTherapeuticClasses() {
  return HTTP.get('/therapeutic_classes', {}).then(response =>
    response.data.therapeutic_classes.map(therapeuticClass => ({
      ...convertObjectFromSnakeToCamelCase(therapeuticClass),
      isSaving: false,
      failedToSaveError: null,
    })));
}

function updateTherapeuticClass(id, fields) {
  return HTTP.post(`/therapeutic_classes/${id}`, fields).then(response =>
    convertObjectFromSnakeToCamelCase(response.data.therapeutic_class));
}

export default {
  getCustomers,
  getDrugs,
  getTherapeuticClasses,
  updateTherapeuticClass,
};
