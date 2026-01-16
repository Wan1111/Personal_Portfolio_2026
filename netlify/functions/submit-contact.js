// Netlify serverless function for contact form submission
// This can be used as an alternative to Netlify Forms
exports.handler = async (event, context) => {
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: 'Method Not Allowed' })
    }
  }

  try {
    const data = JSON.parse(event.body)
    const { name, email, subject, message } = data

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: 'All fields are required' })
      }
    }

    // Here you can add database logic
    // Example: Save to a database (MongoDB, PostgreSQL, etc.)
    // For now, we'll just log it (you can integrate with your database)
    
    console.log('Contact form submission:', {
      name,
      email,
      subject,
      message,
      timestamp: new Date().toISOString()
    })

    // TODO: Add your database integration here
    // Example with MongoDB:
    // await db.collection('contacts').insertOne({ name, email, subject, message, timestamp: new Date() })

    // Send email notification (optional)
    // You can use services like SendGrid, Mailgun, or AWS SES

    return {
      statusCode: 200,
      body: JSON.stringify({ 
        message: 'Thank you! Your message has been received.',
        success: true 
      })
    }
  } catch (error) {
    console.error('Error processing contact form:', error)
    return {
      statusCode: 500,
      body: JSON.stringify({ 
        message: 'Error processing your request. Please try again later.',
        error: error.message 
      })
    }
  }
}
