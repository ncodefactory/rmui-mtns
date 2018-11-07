import { expect } from 'chai';
import fs from 'fs';
import tnsn from './tnsn';

describe('tns', () => {
  const contents = fs.readFileSync('./src/tnsnames.ora', 'utf-8');
  const connStrings = tnsn(contents);
  it('parses all items', () => {
    expect(connStrings.length).to.equal(5);
    describe('correctly parses', () => {
      it('address list and connect data with sid', () => {
        expect(connStrings[0]).to.deep.equal({
          name: 'one',
          connStr: 'HOST:PORT/SID',
        });
      });
      it('address list and connect data with service name', () => {
        expect(connStrings[1]).to.deep.equal({
          name: 'two',
          connStr: 'HOST:PORT/SERVICENAME',
        });
      });
      it('address and connect data with sid', () => {
        expect(connStrings[2]).to.deep.equal({
          name: 'three',
          connStr: 'HOST:PORT/SID',
        });
      });
      it('address and connect data with service name', () => {
        expect(connStrings[3]).to.deep.equal({
          name: 'four',
          connStr: 'HOST:PORT/SERVICENAME',
        });
      });
      it('tnsname with upper and lower cases', () => {
        expect(connStrings[4]).to.deep.equal({
          name: 'five',
          connStr: 'HOST:PORT/SERVICENAME',
        });
      });
    });
  });
});
