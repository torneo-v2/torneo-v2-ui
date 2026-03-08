import { describe, it, expect } from 'vitest';
import { TestBed } from '@angular/core/testing';
import { BrowserTestingModule, platformBrowserTesting } from '@angular/platform-browser/testing';

describe('Dummy Unit Test with TestBed', () => {
    try {
        TestBed.initTestEnvironment(BrowserTestingModule, platformBrowserTesting());
    } catch {
        // ignore if already initialized
    }
    it('should be able to use TestBed', () => {
        expect(TestBed).toBeDefined();
    });
});
