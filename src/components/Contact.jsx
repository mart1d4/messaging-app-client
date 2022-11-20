import Title from './ui/Title';
import SubTitle from './ui/SubTitle';

const Contact = () => {
     const featureStyle = {
          display: 'flex',
          flexDirection: 'column',
          maxWidth: '45%',
          alignSelf: 'flex-start',
          alignItems: 'flex-start',
          padding: '2rem 2rem'
      }
  
      const textStyle = {
          fontSize: '1.1rem',
          fontWeight: '300',
          lineWeight: '1.5rem',
          opacity: '0.8',
      }
  
      return (
          <>
              <div
                  style={{
                      marginBottom: '10rem',
                  }}
              >
                  <Title>Contact me</Title>
                  <SubTitle>contact@unthrust.com</SubTitle>
              </div>
  
              <section style={featureStyle}>
                  <Title type='h2' size='3rem' margin='1rem'>Simple</Title>
                  <p
                      style={textStyle}
                  >
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero qui nisi facere quis, voluptate dolores minima, modi deserunt quod id dolorum corporis illum sed animi porro iure esse excepturi eaque!
                  </p>
              </section>
  
              <section style={{ ...featureStyle, alignSelf: 'flex-end', alignItems: 'flex-end' }}>
                  <Title type='h2' size='3rem' margin='1rem'>Fast</Title>
                  <p
                      style={{ ...textStyle, textAlign: 'right' }}
                  >
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti provident laudantium modi facilis dolor repellat, blanditiis, vel similique quod unde soluta ratione facere pariatur consequatur laboriosam reiciendis sapiente quasi reprehenderit?
                  </p>
              </section>
  
              <section style={featureStyle}>
                  <Title type='h2' size='3rem' margin='1rem'>Secure</Title>
                  <p
                      style={textStyle}
                  >
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia natus aliquid id expedita consectetur suscipit ipsam quam autem quis. Odio odit molestiae quam veritatis tempora, dolor alias magni nisi quia!
                  </p>
              </section>
          </>
      )
}

export default Contact