
import { test } from '@playwright/test';

test.beforeEach(async ({ page }) => {

});

test("Some Example Test", {
    tag: '@smoke-tests',
}, async ({ page }) => {

});

test("Some Example Test #2", {
    tag: '@SMOKE-TESTS',
}, async ({ page }) => {

});

test("Some Example Test #3", {
    tag: '@smoke',
}, async ({ page }) => {

});

test("Some Example Test #4", {
    tag: '@smkoe-test',
}, async ({ page }) => {

});