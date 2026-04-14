'use client'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import listPlugin from '@fullcalendar/list'
import esLocale from '@fullcalendar/core/locales/es'

const Calendario = () => {
  return (
    <div>
        <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin, listPlugin]}
            initialView='dayGridMonth'
            locale={esLocale}
            
            headerToolbar={{
                left: 'prev,next today',
                center:'title',
                right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
            }}


            events={[
                { title: 'habitacion101', start: '2026-04-13T19:30:00', end: '2026-04-14T13:00:00', backgroundColor: '#28a745'},
                { title: 'habitacion102', start: '2026-04-13T12:30:00', end: '2026-04-14T13:00:00', backgroundColor: 'red'},
                { title: 'habitacion103', start: '2026-04-12T08:30:00', end: '2026-04-13T13:00:00', backgroundColor: 'blue'}
            ]}
            height="85vh"
        />
    </div>
  )
}

export default Calendario