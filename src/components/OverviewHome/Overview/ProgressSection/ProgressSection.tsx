import { Card, CardContent, CardTitle } from '@/components/ui/card'
import InfoBlock from './components/InfoBlock'


export default function ProgressSection() {
  const date = new Date().toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });

  return (
    <Card>
      <CardTitle className='text-lg'>SnowUI</CardTitle>
      <CardContent className='flex p-0'>
        <InfoBlock title="Status" content="kmklsmkldmsl" className="pr-6" />
        <InfoBlock
          title="Total Tasks"
          content={
            <>
              15 <span className="text-gray-300">/</span> 48
            </>
          }
          className="px-6"
        />
        <InfoBlock title="Due Data" content={date} className="px-6 " />
        <InfoBlock title="Budget Spent" content="$15,000" className="px-6" />
      </CardContent>
    </Card>
  )
}
