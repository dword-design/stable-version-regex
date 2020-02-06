import versionRegex from 'stable-version-regex'

export default () => {
  expect(versionRegex.test('1.0.0')).toBeTruthy()
  expect(versionRegex.test('21.0.0')).toBeTruthy()
  expect(versionRegex.test('1.0.15')).toBeTruthy()
  expect(versionRegex.test('1.13.14')).toBeTruthy()
  expect(versionRegex.test('0.1.0')).toBeFalsy()
  expect(versionRegex.test('0.12.0')).toBeFalsy()
  expect(versionRegex.test('0.1.13')).toBeFalsy()
  expect(versionRegex.test('1.01.0')).toBeFalsy()
  expect(versionRegex.test('1.1.02')).toBeFalsy()
}
