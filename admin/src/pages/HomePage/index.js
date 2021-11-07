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
          <Box padding={8} background="neutral100">
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
        <Box padding={8} style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
          {graphs.map(() => (
            <GraphCard title="Graph title" graphType={i % 2 ? 'line' : 'pie'} />
          ))}
        </Box>
      </Layout>
    </Box>
  );
};

export default memo(HomePage);
