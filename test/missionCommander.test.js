const MissionCommander = require('./../app/missionCommander.js');

describe("Unit tests for Mission Commander class", () => {
    test('Case test 1 - Create a mission commander object', () => {
      const myMissionCommander = new MissionCommander('Woopa');
      expect(myMissionCommander.name).toBe('Woopa');
    });
})  