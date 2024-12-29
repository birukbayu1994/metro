// components/ArtworkCardDetail.js

import useSWR from 'swr';
import Error from 'next/error';
import { Card } from 'react-bootstrap';

export default function ArtworkCardDetail({ objectID }) {
  const { data, error } = useSWR(
    `https://collectionapi.metmuseum.org/public/collection/v1/objects/${objectID}`
  );

  if (error) return <Error statusCode={404} />;
  if (!data) return null;

  return (
    <Card>
      {data.primaryImage && (
        <Card.Img variant="top" src={data.primaryImage} />
      )}
      <Card.Body>
        <Card.Title>{data.title || 'N/A'}</Card.Title>
        <Card.Text>
          <strong>Date:</strong> {data.objectDate || 'N/A'}
          <br />
          <strong>Classification:</strong> {data.classification || 'N/A'}
          <br />
          <strong>Medium:</strong> {data.medium || 'N/A'}
          <br />
          <br />
          <strong>Artist:</strong>{' '}
          {data.artistDisplayName ? (
            <>
              {data.artistDisplayName}{' '}
              <a
                href={data.artistWikidata_URL}
                target="_blank"
                rel="noreferrer"
              >
                wiki
              </a>
            </>
          ) : (
            'N/A'
          )}
          <br />
          <strong>Credit Line:</strong> {data.creditLine || 'N/A'}
          <br />
          <strong>Dimensions:</strong> {data.dimensions || 'N/A'}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}