import { test } from 'node:test';
import assert from 'node:assert';
import { JSDOM } from 'jsdom';
import homeController from '../src/controllers/home.controller.js';

// Example test case 1
test('Addition works correctly', () => {
    const result = 2 + 2;
    assert.strictEqual(result, 4, '2 + 2 should equal 4');
});

// Example test case 2
test('String includes substring', () => {
    const str = 'Hello, world!';
    assert.ok(str.includes('world'), '"Hello, world!" should include "world"');
});

// Example test case 3
test('Array contains specific element', () => {
    const arr = [1, 2, 3, 4, 5];
    assert.ok(arr.includes(3), 'Array should contain the number 3');
});

// Example test case 4: Check if an object has a specific property
test('Object has specific property', () => {
    const obj = { name: 'James', age: 30 };
    assert.ok(Object.prototype.hasOwnProperty.call(obj, 'name'), 'Object should have a "name" property');
});

// Example test case 5: Verify string starts with a specific prefix
test('String starts with prefix', () => {
    const str = 'JavaScript is awesome';
    assert.ok(str.startsWith('JavaScript'), 'String should start with "JavaScript"');
});

// Example test case 6: Validate array length
test('Array has correct length', () => {
    const arr = [1, 2, 3, 4, 5];
    assert.strictEqual(arr.length, 5, 'Array length should be 5');
});

// Example test case 7: Verify button click functionality
test('Button click triggers alert', () => {
    const { window } = new JSDOM('<!DOCTYPE html><html><body><div id="app"></div></body></html>');
    global.document = window.document;
    global.window = window;

    const divElement = homeController();
    document.getElementById('app').appendChild(divElement);

    const btnClick = divElement.querySelector("#btnClick");

    let alertTriggered = false;
    const originalAlert = global.alert;
    global.alert = () => { alertTriggered = true; };

    btnClick.click();
    assert.ok(alertTriggered, 'Button click should trigger an alert');

    global.alert = originalAlert; // Restore original alert
    delete global.document; // Clean up the global mock
    delete global.window;
});
