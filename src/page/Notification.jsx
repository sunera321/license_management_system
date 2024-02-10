import React from 'react'
import PageHeader from '../components/CommonModal/pageHeader';

const NotifiList = [
  {
    key : 1,
    notifiTitle : 'Notification Title',
    notifiDescription : 'I will never close automatically. This is a purposely very very long description that has many many characters and words.'
  },
  {
    key : 2,
    notifiTitle : 'Notification Title',
    notifiDescription : 'I will never close automatically. This is a purposely very very long description that has many many characters and words.'
  },
  {
    key : 3,
    notifiTitle : 'Notification Title',
    notifiDescription : 'I will never close automatically. This is a purposely very very long description that has many many characters and words.'
  },
  ];

const Notification = () => {
  return (
    <div>
      <div>
        <PageHeader title="System Notification" />
      </div>
      {NotifiList.map((NotifiList)=>(
      <div class="bg-gray-300 w-4/5 mx-auto m-8 p-5 notification-box rounded-xl">
      
        <div class=" text-2xl font-semibold pb-2" key={NotifiList.key}>
        {NotifiList.notifiTitle}
        <span class="float-right">
          <svg
            class="fill-current text-gray-600"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="22"
            height="22"
          >
            <path
              class="heroicon-ui"
              d="M16.24 14.83a1 1 0 0 1-1.41 1.41L12 13.41l-2.83 2.83a1 1 0 0 1-1.41-1.41L10.59 12 7.76 9.17a1 1 0 0 1 1.41-1.41L12 10.59l2.83-2.83a1 1 0 0 1 1.41 1.41L13.41 12l2.83 2.83z"
            />
          </svg>
        </span>
      </div>
      <div class=" text-lg text-gray-600  tracking-tight ">
        {NotifiList.notifiDescription}
      </div>
      </div>
      ))}
    </div>
  )
}

export default Notification