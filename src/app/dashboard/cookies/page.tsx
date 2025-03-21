import { cookies } from 'next/headers'

import { TabBar } from "@/components";


export const metadata = {
 title: 'Cookies Page',
 description: 'SEO Title',
};

export default function CookiesPage() {

  const cookieStore = cookies();
  //evaluo si tinee algun valor xq las cookies en algun momento simepre son nulas(al inicio)
  const cookieTab = cookieStore.get('selectedTab')?.value ?? '1';


  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">

      <div className="flex flex-col">
        <span className="text-3xl">Tabs</span>
        {/* casteo del cookie tab a numero */}
        <TabBar currentTab={ +cookieTab } />
      </div>
      

    </div>
  );
}