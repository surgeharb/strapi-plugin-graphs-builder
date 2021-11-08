/*
 *
 * CreateGraph
 *
 */

import React, { memo, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import pluginId from '../../pluginId';
import GraphCard from '../../components/GraphCard';
import CollectionSelect from '../../components/CollectionSelect';
import { toTitleCase } from '../../utils/string-formatter';
import axiosInstance from '../../utils/axiosInstance';

import Plus from '@strapi/icons/Plus';
import Check from '@strapi/icons/Check';
import Pencil from '@strapi/icons/Pencil';
import ArrowLeft from '@strapi/icons/ArrowLeft';
import Information from '@strapi/icons/Information';
import EmptyDocuments from '@strapi/icons/EmptyDocuments';

import { Box } from '@strapi/design-system/Box';
import { Link } from '@strapi/design-system/Link';
import { Button } from '@strapi/design-system/Button';
import { TextInput } from '@strapi/design-system/TextInput';
import { Select, Option } from '@strapi/design-system/Select';
import { ModalLayout, HeaderLayout } from '@strapi/design-system/Layout';

const CreateGraph = () => {
  const history = useHistory();

  const [graphType, setGraphType] = React.useState('pie');
  const [graphTitle, setGraphTitle] = React.useState('');
  const [collectionX, setCollectionX] = React.useState();
  const [collections, setCollections] = React.useState([]);
  const [collectionXAttribute, setCollectionXAttribute] = React.useState('');

  const goBack = () => {
    history.goBack();
  };

  const saveGraph = async () => {
    const data = {
      type: graphType,
      title: graphTitle,
      collectionX: collectionX.uid,
      collectionXAttribute: collectionXAttribute,
    };

    await axiosInstance.post(`/${pluginId}/graphs`, data);
    goBack();
  };

  useEffect(async () => {
    const response = await axiosInstance.get(`/${pluginId}/collections`);
    const apiCollections = response.data.collections.map((collection) => ({
      ...collection,
      name: toTitleCase(collection.uid.split('.').reverse()[0]),
    }));
    setCollections(apiCollections.sort((a, b) => a.name.localeCompare(b.name)));
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
      <Box padding={8} style={{ paddingTop: 0 }}>
        <Box padding={4}>
          <TextInput
            placeholder="This is a graphTitle placeholder"
            label="Graph Title"
            name="graphTitle"
            onChange={(e) => setGraphTitle(e.target.value)}
            value={graphTitle}
          />
        </Box>
        <Box padding={4}>
          <Select
            required
            id="graph-type"
            label="Graph Type"
            placeholder="Select graph type"
            onClear={() => setGraphType(undefined)}
            onChange={setGraphType}
            value={graphType}
            clearLabel="Clear"
          >
            <Option value="pie">Pie</Option>
            <Option value="line">Line</Option>
          </Select>
        </Box>
        <Box padding={4}>
          <Select
            required
            id="collection-x-type"
            label="Collection X Type"
            placeholder="Select collection type"
            onClear={() => setCollectionX(undefined)}
            onChange={(uid) => setCollectionX(collections.find((c) => c.uid === uid))}
            value={collectionX?.uid}
            clearLabel="Clear"
          >
            {collections.map((coll) => (
              <Option value={coll.uid}>{coll.name}</Option>
            ))}
          </Select>
        </Box>
        <Box padding={4}>
          {!!collectionX && (
            <Select
              required
              id="collection-x-attr"
              label="Collection X Attributes"
              placeholder="Select collection attribute"
              onClear={() => setCollectionXAttribute(undefined)}
              onChange={setCollectionXAttribute}
              value={collectionXAttribute}
              clearLabel="Clear"
            >
              {collectionX.attributes.map((attr) => (
                <Option value={attr}>{attr}</Option>
              ))}
            </Select>
          )}
        </Box>
      </Box>
      <Box padding={8} style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
        <GraphCard title={graphTitle} graphType={graphType} />
      </Box>
    </Box>
  );
};

export default memo(CreateGraph);
