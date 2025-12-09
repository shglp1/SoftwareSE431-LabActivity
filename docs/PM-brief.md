# PM Brief: Client Complaint

**Date:** Oct 12, 2023
**From:** Product Manager
**To:** Engineering Team
**Subject:** URGENT: "Add Task" feature broken in production

## The Issue

The client has reported that the "Add Task" feature is completely non-functional. They try to add a task, click the button, and nothing happens. Sometimes they see an error message, but the task never appears in the list.

## Context

We recently refactored the backend API to be "more RESTful" and strict about data validation. It seems the frontend team might not have updated their code to match the new API specifications.

## Constraints

-   **No Automated Tests**: The previous developer left without writing any tests for this feature. You are flying blind.
-   **"Not Test Compliant"**: The client is furious that we shipped this without verifying it works.

## Your Mission

1.  Run the app and reproduce the bug.
2.  Find the root cause.
3.  Fix the bug.
4.  (Optional) Add a regression test or at least document what went wrong so it doesn't happen again.
