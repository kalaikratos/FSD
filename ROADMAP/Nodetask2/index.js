const express = require('express');
const bodyParser = require('body-parser');
const { format } = require('date-fns'); // Import the format function from date-fns
const app = express();
const port = 3000;

//Local variable to store rooms data
const rooms = [
  {
    roomName: "Auditorium",
    roomId: "01",
    seats: 100,
    amenities: "wifi,projector,AC",
    price: 1500,
  },
  {
    roomName: "Banquet",
    roomId: "02",
    seats: 150,
    amenities: "speaker,projector,AC",
    price: 2000,
  },
  {
    roomName: "Conference ",
    roomId: "03",
    seats: 75,
    amenities: "wifi,projector,AC,tables",
    price: 1250,
  },
];
const bookings = [
  {
    bookingId: 1,
    customerName: "suriya",
    roomId: "01",
    date: format(new Date("07-12-2023"), "dd-MMM-yyyy"),
    start: "08:00",
    end: "09:00",
    status: "confirmed",
  },
  {
    bookingId: 2,
    customerName: "udhaya",
    roomId: "02",
    date: format(new Date("07-14-2023"), "dd-MMM-yyyy"),
    start: "08:00",
    end: "09:00",
    status: "waiting for confirmation",
  },
  {
    bookingId: 3,
    customerName: "suriya",
    roomId: "03",
    date: format(new Date("07-12-2023"), "dd-MMM-yyyy"),
    start: "08:00",
    end: "09:00",
    status: "confirmed",
  },
];

app.use(bodyParser.json());

// 1. Creating a Room
app.post('/createRoom', (req, res) => {
  try {
    const { seats, amenities, pricePerHour } = req.body;

    // Check for valid input
    if (!seats || !amenities || !pricePerHour) {
      return res.status(400).json({ error: 'Invalid room details' });
    }

    const roomId = rooms.length + 1;

    const room = {
      id: roomId,
      seats,
      amenities,
      pricePerHour,
    };

    rooms.push(room);
    res.status(201).json(room);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// 2. Booking a Room
app.post('/bookRoom', (req, res) => {
  try {
    const { customerName, date, startTime, endTime, roomId } = req.body;

    // Check if the room is available for booking
    const isRoomAvailable = !bookings.some(
      (booking) =>
        booking.roomId === roomId &&
        booking.date === date &&
        ((startTime >= booking.startTime && startTime < booking.endTime) ||
          (endTime > booking.startTime && endTime <= booking.endTime) ||
          (startTime <= booking.startTime && endTime >= booking.endTime))
    );

    if (!isRoomAvailable) {
      return res.status(400).json({ error: 'Room already booked for the selected date and time' });
    }

    const bookingId = bookings.length + 1;

    const booking = {
      id: bookingId,
      customerName,
      date,
      startTime,
      endTime,
      roomId,
    };

    bookings.push(booking);
    res.status(201).json(booking);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// 3. List all Rooms with Booked Data
app.get('/listRooms', (req, res) => {
  try {
    const roomList = rooms.map((room) => {
      const bookedData = bookings.filter((booking) => booking.roomId === room.id);
      return {
        roomName: `Room ${room.id}`,
        bookedStatus: bookedData.length > 0,
        bookedData,
      };
    });

    res.status(200).json(roomList);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// 4. List all customers with booked Data
app.get('/listCustomers', (req, res) => {
  try {
    const customerList = bookings.map((booking) => {
      const room = rooms.find((room) => room.id === booking.roomId);
      return {
        customerName: booking.customerName,
        roomName: `Room ${booking.roomId}`,
        date: booking.date,
        startTime: booking.startTime,
        endTime: booking.endTime,
      };
    });

    res.status(200).json(customerList);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// 5. List how many times a customer has booked the room
app.get('/customerBookingHistory', (req, res) => {
  try {
    const customerHistory = bookings.map((booking) => ({
      customerName: booking.customerName,
      roomName: `Room ${booking.roomId}`,
      date: booking.date,
      startTime: booking.startTime,
      endTime: booking.endTime,
      bookingId: booking.id,
      bookingDate: new Date(),
      bookingStatus: 'Confirmed',
    }));

    res.status(200).json(customerHistory);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});





