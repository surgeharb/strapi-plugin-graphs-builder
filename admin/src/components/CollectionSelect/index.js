import React, { useState } from 'react';
import { Stack } from '@strapi/design-system/Stack';
import { Select, Option } from '@strapi/design-system/Select';
import Plus from '@strapi/icons/Plus';

const CollectionSelect = ({ title, data }) => {
  const [value, setValue] = useState();
  const [error, toggleError] = useState();
  const [disabled, toggleDisabled] = useState();

  return (
    <Stack size={11}>
      <Select
        id={title}
        label={title}
        required
        placeholder="Select collection type"
        // hint="Description line"
        onClear={() => setValue(undefined)}
        clearLabel="Clear"
        error={error}
        value={value}
        onChange={setValue}
        disabled={disabled}
      >
        {data.map((el) => (
          <Option value={el}>{el}</Option>
        ))}
      </Select>
      {/* <button onClick={() => toggleError((s) => (s ? undefined : 'An error occured'))}>
        Show the error state
      </button>
      <button onClick={() => toggleDisabled((s) => !s)}>Show the disabled state</button> */}
    </Stack>
  );
};

export default CollectionSelect;
