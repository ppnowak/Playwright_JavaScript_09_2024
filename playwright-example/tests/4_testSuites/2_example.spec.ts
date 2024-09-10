
import { test } from '@playwright/test';
import { TAGS } from '../commons';

test.beforeEach(async ({ page }) => {

});

test("Some Example Test", {
    tag: [TAGS.SMOKE, TAGS.REGRESSION],
}, async ({ page }) => {

});

test("Some Example Test #2", {
    tag: TAGS.REGRESSION,
}, async ({ page }) => {

});

test("Some Example Test #3", {
    tag: TAGS.REGRESSION,
}, async ({ page }) => {

});

test("Some Example Test #4", {
    tag: TAGS.REGRESSION,
}, async ({ page }) => {

});