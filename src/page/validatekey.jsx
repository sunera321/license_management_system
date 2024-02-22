import React from 'react'
import PageHeader from '../components/CommonModal/pageHeader'
import { Button } from '@material-tailwind/react'

const Data = [
  {
    key: 1,
    ClientName: 'DSI',
    ClientEmail: 'exampel@gamil.com',
    PartnerName: 'partner name',
    PartnerId: 'PID1223'
  },
  {
    key: 2,
    ClientName: 'DSI',
    ClientEmail: 'exampel@gamil.com',
    PartnerName: 'partner name',
    PartnerId: 'PID1223'
  },
  {
    key: 3,
    ClientName: 'DSI',
    ClientEmail: 'exampel@gamil.com',
    PartnerName: 'partner name',
    PartnerId: 'PID1223'
  },
  {
    key: 4,
    ClientName: 'DSI',
    ClientEmail: 'exampel@gamil.com',
    PartnerName: 'partner name',
    PartnerId: 'PID1223'
  },
  {
    key: 5,
    ClientName: 'DSI',
    ClientEmail: 'exampel@gamil.com',
    PartnerName: 'partner name',
    PartnerId: 'PID1223'
  },
  {
    key: 6,
    ClientName: 'DSI',
    ClientEmail: 'exampel@gamil.com',
    PartnerName: 'partner name',
    PartnerId: 'PID1223'
  },
  {
    key: 7,
    ClientName: 'DSI',
    ClientEmail: 'exampel@gamil.com',
    PartnerName: 'partner name',
    PartnerId: 'PID1223'
  },
  {
    key: 8,
    ClientName: 'DSI',
    ClientEmail: 'exampel@gamil.com',
    PartnerName: 'partner name',
    PartnerId: 'PID1223'
  },
];

const ValidateKey = () => {
  return (
    <div className="min-h-screen pb-10">
      <div>
        <PageHeader title="Validate License Key" />
      </div>
      {Data.map((Data) => (
        <div class="bg-gray-300 w-4/5 mx-auto m-8 mt-6  pr-2 pl-2 notification-box rounded-xl">
          <div class="pl-5 pr-5 p-2" key={Data.key}>
            <div className="flex justify-between ">
              <div>
                <div class="font-bold">
                  {Data.ClientName}
                </div>
                <div>
                  {Data.ClientEmail}
                </div>
              </div>
              <div>
                <div class="font-bold">
                  {Data.PartnerName}
                </div>
                <div>
                  Partner -{Data.PartnerId}
                </div>
              </div>
              <div className="hidden p-2 mt-1 bg-red-500 rounded-lg md:inline ">
                Warning!
              </div>
              <Button className="h-10 mt-1 font-bold border-2 border-sky-500 text-violet-950 ">
                <a href="/compeardata">Action</a>
               
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ValidateKey;
