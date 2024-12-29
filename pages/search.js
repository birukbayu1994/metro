// pages/search.js

import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import { Form, Button, Row, Col } from 'react-bootstrap';

export default function AdvancedSearch() {
  const router = useRouter();
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      searchBy: 'title',
      geoLocation: '',
      medium: '',
      isOnView: false,
      isHighlight: false,
      q: '',
    },
  });

  const submitForm = (data) => {
    let queryString = `searchBy=${data.searchBy}`;
    if (data.geoLocation) {
      queryString += `&geoLocation=${data.geoLocation}`;
    }
    if (data.medium) {
      queryString += `&medium=${data.medium}`;
    }
    queryString += `&isOnView=${data.isOnView}`;
    queryString += `&isHighlight=${data.isHighlight}`;
    queryString += `&q=${data.q}`;

    router.push(`/artwork?${queryString}`);
  };

  return (
    <Form onSubmit={handleSubmit(submitForm)}>
      <Row>
        <Col md={6}>
          <Form.Group className="mb-3" controlId="searchBy">
            <Form.Label>Search By</Form.Label>
            <Form.Select {...register('searchBy')}>
              <option value="title">Title</option>
              <option value="tags">Tags</option>
            </Form.Select>
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group className="mb-3" controlId="geoLocation">
            <Form.Label>Geo Location</Form.Label>
            <Form.Control
              type="text"
              placeholder=""
              {...register('geoLocation')}
            />
            <Form.Text className="text-muted">
              Case Sensitive String (ie "Europe", "France", "Paris", "China",
              "New York")
            </Form.Text>
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <Form.Group className="mb-3" controlId="medium">
            <Form.Label>Medium</Form.Label>
            <Form.Control type="text" placeholder="" {...register('medium')} />
            <Form.Text className="text-muted">
              Case Sensitive String (ie: "Ceramics", "Furniture", "Paintings",
              "Sculpture", "Textiles")
            </Form.Text>
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group className="mb-3" controlId="isOnView">
            <Form.Check
              type="checkbox"
              label="Currently on View"
              {...register('isOnView')}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="isHighlight">
            <Form.Check
              type="checkbox"
              label="Highlights"
              {...register('isHighlight')}
            />
          </Form.Group>
        </Col>
      </Row>
      <Form.Group className="mb-3" controlId="q">
        <Form.Label>Search Query</Form.Label>
        <Form.Control
          type="text"
          placeholder=""
          {...register('q', { required: true })}
          className={errors.q ? 'is-invalid' : ''}
        />
        {errors.q && (
          <div className="invalid-feedback">This field is required</div>
        )}
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}
