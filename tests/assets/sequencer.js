const Sequencer = require('@jest/test-sequencer').default;

class CustomeSequencer extends Sequencer{
    sort(tests){
        const copy = Array.from(tests);
        return copy.sort((a, b) => (a.path > b.path ? 1: -1));
    }
}

module.exports = CustomeSequencer;