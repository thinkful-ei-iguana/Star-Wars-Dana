import React from 'React'
import SWAPISearch from './SWAPISearch'
import {shallow} from 'enzyme'

describe('Search form and the main file', ()=>{
  it('renders without crashing', ()=>{
    shallow(<SWAPISearch/>)
  })
})