// MyForm.js

import React, { useState } from 'react';
import { contactType } from '../types/commonTypes';

const MyForm = () => {
  const [formData, setFormData] = useState({
    field1: '',
    field2: '',
    field3: '',
    field4: '',
    field5: '',
    field6: '',
    field7: '',
    field8: '',
    field9: '',
    field10: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e:contactType) => {
    e.preventDefault();
    // You can perform form submission logic here
    console.log('Form submitted with data:', formData);
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
      <div style={{ display: 'flex', flexDirection: 'row', marginBottom: '16px' }}>
        {/* Column 1 */}
        <div style={{ marginRight: '16px' }}>
          <label>
            Field 1:
            <input type="text" name="field1" value={formData.field1} onChange={handleChange} />
          </label>

          {/* Repeat the above label and input pattern for fields 2 to 5 */}
        </div>

        {/* Column 2 */}
        <div>
          {/* Repeat the above label and input pattern for fields 6 to 10 */}
        </div>
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default MyForm;
