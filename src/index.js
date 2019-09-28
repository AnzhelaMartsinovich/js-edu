/**
 * @param preferences - target student focus
 * @param knowsProgramming - if student can do programming and know basics
 * @param config - private student ability to perform for different focus modes
 * @returns number of weeks needed for finish education
 */
module.exports = function getTimeForEducation(
    focus = 'family', 
    knowsProgramming = true,
    config = {family: 4}
    ) {
      // если у студента есть базовые знания в программировании
      if (knowsProgramming === true && focus === 'family') {
        return Math.ceil(800 / config.family);
      }
      if (knowsProgramming === true && focus === 'friends') {
        return Math.ceil(800 / config.friends);
      }
      if (knowsProgramming === true && focus === 'normal_life') {
        return Math.ceil(800 / config.normal_life);
      }
      if (knowsProgramming === true && focus === 'profession') {
        return Math.ceil(800 / config.profession);
      }
      if (knowsProgramming === true && focus === 'carrier') {
        return Math.ceil(800 / config.carrier);
      }
      if (knowsProgramming === true && focus === 'top_peformance') {
        return Math.ceil(800 / config.top_peformance);
      }

      // студент без знаний в программировании
      if (knowsProgramming === false && focus === 'family') {
        return Math.ceil(1300 / config.family);
      }
      if (knowsProgramming === false && focus === 'friends') {
        return Math.ceil(1300 / config.friends);
      }
      if (knowsProgramming === false && focus === 'normal_life') {
        return Math.ceil(1300 / config.normal_life);
      }
      if (knowsProgramming === false && focus === 'profession') {
        return Math.ceil(1300 / config.profession);
      }
      if (knowsProgramming === false && focus === 'carrier') {
        return Math.ceil(1300 / config.carrier);
      }
      if (knowsProgramming === false && focus === 'top_peformance') {
        return Math.ceil(1300 / config.top_peformance);
      }

  };
  