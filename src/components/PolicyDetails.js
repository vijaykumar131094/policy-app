import React from 'react';
import { useParams } from 'react-router-dom';

const policyData = {
  1: { iso: 'ISO Point 1', soc: 'SOC Point 1' },
  2: { iso: 'ISO Point 2', soc: 'SOC Point 2' },
  3: { iso: 'ISO Point 3', soc: 'SOC Point 3' },
};

function PolicyDetails() {
  const { id } = useParams();
  const policy = policyData[id];

  if (!policy) {
    return <h2>Policy not found</h2>;
  }

  return (
    <div>
      <h1>Policy Details</h1>
      <p><strong>ISO Points:</strong> {policy.iso}</p>
      <p><strong>SOC Points:</strong> {policy.soc}</p>
    </div>
  );
}

export default PolicyDetails;
