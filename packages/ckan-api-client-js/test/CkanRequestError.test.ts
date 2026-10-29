import * as chai from "chai";
const expect = chai.expect;

import { CkanRequestError } from "../src/CkanRequest";
import { CkanErrorType } from "../src/types";

// Unit tests for the CkanRequestError message builder.
// These are pure and need no live CKAN server, unlike the tests in main.ts.
describe("CkanRequestError", () => {
  it("builds a message from validation error fields", () => {
    const err = new CkanRequestError({
      help: "help-url",
      error: { __type: CkanErrorType.ValidationError, name: ["is required"] },
    });
    expect(err.message).to.be.eq('Validation error: "name": is required');
  });

  it("falls back when a validation error has no fields", () => {
    const err = new CkanRequestError({
      help: "help-url",
      error: { __type: CkanErrorType.ValidationError },
    });
    expect(err.message).to.be.eq("Validation error: An error happened");
  });

  it("uses the default message for an unknown error type", () => {
    const err = new CkanRequestError({
      help: "help-url",
      error: { __type: "Some Other Error" as CkanErrorType },
    });
    expect(err.message).to.be.eq("An unknown error happened");
  });
});
