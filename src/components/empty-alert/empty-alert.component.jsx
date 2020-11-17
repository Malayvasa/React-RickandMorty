import React from 'react'
import Alert  from 'react-bootstrap/Alert';

export const EmptyAlert = props => {
    return(
        <Alert variant="danger">
        <Alert.Heading>Oh snap! No such characters exist!</Alert.Heading>
        <p>
          To be clear, since there are infinite universes in the central time curve, they do exist.
          They just haven't been introduced to us yet.
        </p>
      </Alert>
    );
 };