import React, {useEffect, useState} from 'react';
import { AppContent } from '../appContent';
import { HeaderTitle } from '../headerTitle';

export const App = () => {
  return(
    <div className='app-wrapper'>
      <HeaderTitle title='Jokes App'/>
      <AppContent />
    </div>
  )
}
