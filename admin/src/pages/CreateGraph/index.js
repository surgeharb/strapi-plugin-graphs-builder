/*
 *
 * CreateGraph
 *
 */

import React, { memo, useEffect } from 'react';
// import PropTypes from 'prop-types';
import pluginId from '../../pluginId';
import GraphCard from '../../components/GraphCard';
import CollectionSelect from '../../components/CollectionSelect';
import axiosInstance from '../../utils/axiosInstance';

import Plus from '@strapi/icons/Plus';
import Check from '@strapi/icons/Check';
import Pencil from '@strapi/icons/Pencil';
import ArrowLeft from '@strapi/icons/ArrowLeft';
import EmptyDocuments from '@strapi/icons/EmptyDocuments';

import { Box } from '@strapi/design-system/Box';
import { Link } from '@strapi/design-system/Link';
import { Button } from '@strapi/design-system/Button';
import { ModalLayout, HeaderLayout } from '@strapi/design-system/Layout';

const CreateGraph = () => {
  const [collections, setCollections] = React.useState([]);

  const goBack = () => {
    window.location = `/plugins/${pluginId}`;
  };

  const saveGraph = () => {
    alert('Save Graph!');
    window.location = `/plugins/${pluginId}`;
  };

  useEffect(async () => {
    const response = await axiosInstance.get(`/${pluginId}/collections`);
    setCollections(response.data.collections);
  }, []);

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
      <Box padding={8}>
        <CollectionSelect data={collections} />
      </Box>
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
