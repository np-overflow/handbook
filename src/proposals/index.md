# Proposals

Proposals are recommended to follow the SBAR format (Situation, Background, Assessment, Recommendation).

Any proposal should have a status, driver, approver, and contributors. This should be indicated in the Markdown files frontmatter and updated as necessary. The file should also use the `TheProposalTable.vue` component.

In any proposal, the driver is highly recommended to show a POC in the recommendation section.

A template is provided below:

```md
---
status: Pending
driver: Qin Guan
approver: 'NA'
contributors:
- Qin Guan
---

# My amazing proposal

<TheProposalTable />

## Situation

## Background

## Assessment

## Recommendation
```

If a proposal is approved, the driver has the responsibility to implement it. 
