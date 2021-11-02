/*
 *
 * HomePage
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
import pluginId from '../../pluginId';

import Plus from '@strapi/icons/Plus';
import ArrowLeft from '@strapi/icons/ArrowLeft';
import EmptyDocuments from '@strapi/icons/EmptyDocuments';

import { Box } from '@strapi/parts/Box';
import { Link } from '@strapi/parts/Link';
import { LinkButton } from '@strapi/parts/LinkButton';
import { Layout, BaseHeaderLayout } from '@strapi/parts/Layout';
import { EmptyStateLayout } from '@strapi/parts/EmptyStateLayout';

const HomePage = () => {
  const [graphs, setGraphs] = React.useState([]);

  console.log(pluginId);

  return (
    <div>
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
        </Layout>
      </Box>
    </div>
  );
};

export default memo(HomePage);
