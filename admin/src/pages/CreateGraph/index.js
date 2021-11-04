/*
 *
 * CreateGraph
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
import pluginId from '../../pluginId';
import GraphCard from '../../components/GraphCard';

import Plus from '@strapi/icons/Plus';
import Check from '@strapi/icons/Check';
import Pencil from '@strapi/icons/Pencil';
import ArrowLeft from '@strapi/icons/ArrowLeft';
import EmptyDocuments from '@strapi/icons/EmptyDocuments';

import { Box } from '@strapi/parts/Box';
import { Link } from '@strapi/parts/Link';
import { Button } from '@strapi/parts/Button';
import { ModalLayout, HeaderLayout } from '@strapi/parts/Layout';

const CreateGraph = () => {
  const goBack = () => {
    window.location = `/plugins/${pluginId}`;
  };

  const saveGraph = () => {
    alert('Save Graph!');
    window.location = `/plugins/${pluginId}`;
  };

  return (
    <Box background="neutral100">
      <HeaderLayout
        navigationAction={
          <Link startIcon={<ArrowLeft />} to={`/plugins/${pluginId}`}>
            Go back
          </Link>
        }
        primaryAction={
          <Box style={{ display: 'flex' }}>
            <Button variant="secondary" onClick={goBack}>
              Cancel
            </Button>
            <Button startIcon={<Check />} onClick={saveGraph} style={{ marginLeft: 8 }}>
              Save
            </Button>
          </Box>
        }
        title="Create new Graph"
        as="h2"
      />
      <Box padding={8} style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
        {Array(7)
          .fill('')
          .map(() => (
            <GraphCard title="Graph title" />
          ))}
      </Box>
    </Box>
  );
};

export default memo(CreateGraph);
