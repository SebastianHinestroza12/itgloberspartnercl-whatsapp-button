import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Whatsapp } from '../../interfaces';
import { StyledComponent } from '../style/style'


const WhatsappButton = ({ logo }: Whatsapp) => { 
  return (
    <Fragment>
      <StyledComponent>
      <div>
        <a href={`https://wa.link/tfxzk9`}
          target='_blank'
          rel='noreferrer noopener'>
          
          <img src={logo} alt="Logo de whatsapp" />
        </a>
      </div>
      </StyledComponent>
    </Fragment>
  )
}

/* Una validación del tipo de datos que se reciben en el componente. */
WhatsappButton.propTypes = {
  logo: PropTypes.string.isRequired, 
}

/* Establecer el valor predeterminado de la propiedad del logotipo en "logo.png" */
WhatsappButton.defaultProps = {
  logo: "logo.png"
}

/* Un esquema para el componente. */
WhatsappButton.schema = {
  title: "Button Of Whatsapp",
  type: "object",
  properties: {
    logo: {
      title: "Logo whatsapp que se relacione con la marca", 
      type: "string",
      widget: {
        "ui:widget" : "image-uploader"
      }
    }
  }
}


export { WhatsappButton}
