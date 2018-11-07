import { expect } from 'chai';
import fs from 'fs';
import mtns from './mtns';

describe('mtns', () => {
  const content = fs.readFileSync('./src/maat.tns');
  const mtnses = mtns(content);
  it('parses all items', () => {
    expect(mtnses.length).to.equal(4);
  });
  describe('correctly parses', () => {
    it('two elements with a terminating semicolon', () => {
      expect(mtnses[0]).to.deep.equal({
        name: 'one@two',
        connStrName: 'two',
        user: 'one',
        passwd: null,
      });
    });
    it('two elements without a terminating semicolon', () => {
      expect(mtnses[1]).to.deep.equal({
        name: 'three@four',
        connStrName: 'four',
        user: 'three',
        passwd: null,
      });
    });
    it('three elements with a terminating semicolon', () => {
      expect(mtnses[2]).to.deep.equal({
        name: 'five@six',
        connStrName: 'six',
        user: 'five',
        passwd: 'seven',
      });
    });
    it('three elements without a terminating semicolon', () => {
      expect(mtnses[3]).to.deep.equal({
        name: 'eight@nine',
        connStrName: 'nine',
        user: 'eight',
        passwd: 'ten',
      });
    });
  });
});
