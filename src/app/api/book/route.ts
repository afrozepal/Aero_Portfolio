import { NextRequest, NextResponse } from 'next/server';

interface BookingRequest {
  name: string;
  email: string;
  phone: string;
  service: string;
  preferredDate: string;
  preferredTime: string;
  projectBrief: string;
  budget: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: BookingRequest = await request.json();
    
    // Server-side validation
    const errors: string[] = [];
    
    if (!body.name?.trim()) {
      errors.push('Name is required');
    }
    
    if (!body.email?.trim()) {
      errors.push('Email is required');
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email)) {
      errors.push('Invalid email format');
    }
    
    if (!body.phone?.trim()) {
      errors.push('Phone number is required');
    }
    
    if (!body.service?.trim()) {
      errors.push('Service selection is required');
    }
    
    if (!body.preferredDate?.trim()) {
      errors.push('Preferred date is required');
    }
    
    if (!body.preferredTime?.trim()) {
      errors.push('Preferred time is required');
    }
    
    if (!body.projectBrief?.trim()) {
      errors.push('Project brief is required');
    } else if (body.projectBrief.trim().length < 50) {
      errors.push('Project brief must be at least 50 characters');
    }

    if (errors.length > 0) {
      return NextResponse.json(
        { error: 'Validation failed', details: errors },
        { status: 400 }
      );
    }

    // In a real application, you would:
    // 1. Save to database
    // 2. Send email notification
    // 3. Integrate with calendar system
    // 4. Send confirmation email to client

    // For now, we'll simulate saving to a local file
    const bookingData = {
      ...body,
      id: Date.now().toString(),
      timestamp: new Date().toISOString(),
      status: 'pending',
    };

    // TODO: Replace with actual database save
    console.log('New booking request:', bookingData);

    // TODO: Send email notification to admin
    // Example with SendGrid (uncomment and configure):
    /*
    const sgMail = require('@sendgrid/mail');
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    
    const msg = {
      to: 'afrozenajam@gmail.com',
      from: 'noreply@yourdomain.com',
      subject: 'New Booking Request',
      html: `
        <h2>New Booking Request</h2>
        <p><strong>Name:</strong> ${body.name}</p>
        <p><strong>Email:</strong> ${body.email}</p>
        <p><strong>Phone:</strong> ${body.phone}</p>
        <p><strong>Service:</strong> ${body.service}</p>
        <p><strong>Preferred Date:</strong> ${body.preferredDate}</p>
        <p><strong>Preferred Time:</strong> ${body.preferredTime}</p>
        <p><strong>Budget:</strong> ${body.budget || 'Not specified'}</p>
        <p><strong>Project Brief:</strong></p>
        <p>${body.projectBrief}</p>
      `,
    };
    
    await sgMail.send(msg);
    */

    // TODO: Send confirmation email to client
    /*
    const confirmationMsg = {
      to: body.email,
      from: 'noreply@yourdomain.com',
      subject: 'Booking Request Received - WebDev Pro',
      html: `
        <h2>Thank you for your booking request!</h2>
        <p>Hi ${body.name},</p>
        <p>We've received your booking request and will get back to you within 24 hours.</p>
        <p><strong>Your Request Details:</strong></p>
        <ul>
          <li>Service: ${body.service}</li>
          <li>Preferred Date: ${body.preferredDate}</li>
          <li>Preferred Time: ${body.preferredTime}</li>
        </ul>
        <p>If you have any questions, feel free to email us at afrozenajam@gmail.com</p>
        <p>Best regards,<br>The WebDev Pro Team</p>
      `,
    };
    
    await sgMail.send(confirmationMsg);
    */

    // TODO: Integrate with Calendly or similar
    // Example Calendly integration:
    /*
    const calendlyEvent = {
      name: body.name,
      email: body.email,
      service: body.service,
      preferredDate: body.preferredDate,
      preferredTime: body.preferredTime,
      projectBrief: body.projectBrief,
    };
    
    // Send to Calendly webhook or API
    await fetch('https://api.calendly.com/webhooks/booking', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.CALENDLY_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(calendlyEvent),
    });
    */

    // TODO: Stripe integration for deposits
    // Example Stripe Checkout session:
    /*
    const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
    
    if (body.budget && body.budget.includes('$')) {
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: [
          {
            price_data: {
              currency: 'usd',
              product_data: {
                name: 'Consultation Deposit',
                description: `Initial consultation for ${body.service}`,
              },
              unit_amount: 5000, // $50.00
            },
            quantity: 1,
          },
        ],
        mode: 'payment',
        success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/booking`,
        customer_email: body.email,
        metadata: {
          bookingId: bookingData.id,
          service: body.service,
        },
      });
      
      return NextResponse.json({ 
        success: true, 
        checkoutUrl: session.url,
        bookingId: bookingData.id 
      });
    }
    */

    return NextResponse.json({
      success: true,
      message: 'Booking request received successfully',
      bookingId: bookingData.id,
    });

  } catch (error) {
    console.error('Error processing booking request:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// Handle preflight requests
export async function OPTIONS(request: NextRequest) {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}
