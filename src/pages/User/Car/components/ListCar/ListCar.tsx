import CardPost from '../CardPost'
import './styles.scss'

const formatLocation = (location: any) => {
  return `${location?.address}, ${location?.district?.name},
      ${location?.district?.province?.name}`
}

export const ListJob = ({ listJob, message, isDisabled }: any) => {
  return (
    <div className='hrpost__list'>
      {listJob?.length > 0
        ? listJob.map((job: any) => (
            <CardPost
              idJob={job?.id}
              key={job?.id}
              status={job?.status}
              jobName={job?.name}
              amount={job?.amount}
              amountApplications={job?.numOfApply}
              timeStart={job?.timeStartStr}
              timeEnd={job?.timeEndStr}
              timeCreated={job?.createDate}
              companyName={job?.hr?.company?.name}
              companyLocation={formatLocation(job?.locationjob)}
              isDisabled={isDisabled}
              jobDetail={job}
            />
          ))
        : ''
          // <Null text={message} />
      }
    </div>
  )
}
