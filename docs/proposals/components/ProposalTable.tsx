import * as React from 'react'

enum Status {
  Pending = 'pending',
  Approved = 'approved',
  Rejected = 'rejected'
}

export interface ProposalTableProps {
  status: Status
  driver: string
  approver: string
  contributors?: string[]
}

const badgeClassNameMapping: Record<Status, string> = {
  [Status.Pending]: 'badge--warning',
  [Status.Approved]: 'badge--success',
  [Status.Rejected]: 'badge--danger'
}

export default function ProposalTable({ status, driver, approver, contributors = [] }: ProposalTableProps) {
  return (
    <table>
      <tbody>
        <tr>
          <th>Status</th>
          <td>
            <div style={{ display: 'flex' }}>
              <div className={`badge ${badgeClassNameMapping[status]}`}>{status}</div>
            </div>
          </td>
        </tr>
        <tr>
          <th>Driver</th>
          <td>
            {driver}
          </td>
        </tr>

        {approver ? (
          <tr>
            <th>
              Approver
            </th>
            <td>
              {approver}
            </td>
          </tr>
        ) : null}

        {contributors.length > 0 ? (
          <tr>
            <th>
              Contributors
            </th>
            <td>
              <div style={{ display: 'flex', gap: '0.5rem', gridGap: '0.5rem'}}>
                {contributors.map((contributor) => (
                  <span key={contributor} className={"badge badge--secondary"}>{contributor}</span>
                ))}
              </div>
            </td>
          </tr>
        ) : null}
      </tbody>
    </table>
  )
}
