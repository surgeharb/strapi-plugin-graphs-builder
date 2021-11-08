/*
 *
 * HomePage
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
import pluginId from '../../pluginId';
import GraphCard from '../../components/GraphCard';
import axiosInstance from '../../utils/axiosInstance';

import Plus from '@strapi/icons/Plus';
import ArrowLeft from '@strapi/icons/ArrowLeft';
import EmptyDocuments from '@strapi/icons/EmptyDocuments';

import { Box } from '@strapi/design-system/Box';
import { LinkButton } from '@strapi/design-system/LinkButton';
import { Layout, BaseHeaderLayout } from '@strapi/design-system/Layout';
import { EmptyStateLayout } from '@strapi/design-system/EmptyStateLayout';

const HomePage = () => {
  const [graphs, setGraphs] = React.useState([]);

  React.useEffect(async () => {
    const response = await axiosInstance.get(`/${pluginId}/graphs`);
    setGraphs(response.data);
  }, []);

  return (
    <Box background="neutral100">
      <Layout>
        <BaseHeaderLayout
          primaryAction={
            <LinkButton to={`/plugins/${pluginId}/graphs/create-graph`} startIcon={<Plus />}>
              Create new graph
            </LinkButton>
          }
          title="Graphs"
          subtitle={`${graphs.length} graphs created`}
          as="h2"
        />
        {!graphs.length && (
          <Box background="neutral100" style={{ padding: '0 56px' }}>
            <EmptyStateLayout
              icon={<EmptyDocuments width="10rem" />}
              content="You don't have any graphs yet..."
              action={
                <LinkButton
                  to={`/plugins/${pluginId}/graphs/create-graph`}
                  startIcon={<Plus />}
                  variant="secondary"
                >
                  Create your first graph
                </LinkButton>
              }
            />
          </Box>
        )}
        <Box
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            padding: '0 56px',
          }}
        >
          {graphs.map(({ title, type, graphData }) => (
            <GraphCard title={title} graphType={type} data={graphData} />
          ))}
        </Box>
      </Layout>
    </Box>
  );
};

export default memo(HomePage);
