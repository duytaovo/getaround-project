import { createSlice } from '@reduxjs/toolkit'
import { IHeroSectionType } from 'src/types/driveWithUber/heroSection.type'

type DriveWithUberType = {
  heroSection: IHeroSectionType
}

const initialState: DriveWithUberType = {
  heroSection: {
    logos: ['Unlock', 'UBer'],
    titles: ['Drive Getaround cars.', 'Earn with Uber.'],
    paragraphs: [
      "Want to drive for Uber, but don't have the right car? Getaround offers pre-approved and inspected vehicles, ready for you to book by the hour, day or week.",
      "Find the right car and start earning with Uber and Uber Eats. The Getaround and Uber apps are seamlessly connected. It's trusted tech that makes life easier for guests and hosts."
    ]
  }
}

const driveWithUberSlice = createSlice({
  name: 'driveWithUber',
  initialState,
  reducers: {}
})
