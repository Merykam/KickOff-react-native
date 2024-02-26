import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Home from '../screens/Home'; 

describe('Home Component', () => {
  it('renders correctly', () => {
    const { getByText } = render(<Home />);
    
    const viewMatchesButton = getByText('View Matches');
    expect(viewMatchesButton).toBeTruthy();

    const viewPlayersButton = getByText('View Players');
    expect(viewPlayersButton).toBeTruthy();
  });

  it('navigates to Matches1 screen on "View Matches" button press', () => {
    const mockNavigate = jest.fn();
    const navigation = { navigate: mockNavigate };
    const { getByText } = render(<Home navigation={navigation} />);
    
    const viewMatchesButton = getByText('View Matches');
    fireEvent.press(viewMatchesButton);
    
    expect(mockNavigate).toHaveBeenCalledWith('Matches1');
  });

  it('navigates to Players screen on "View Players" button press', () => {
    const mockNavigate = jest.fn();
    const navigation = { navigate: mockNavigate };
    const { getByText } = render(<Home navigation={navigation} />);
    
    const viewPlayersButton = getByText('View Players');
    fireEvent.press(viewPlayersButton);
    
    expect(mockNavigate).toHaveBeenCalledWith('Players');
  });
});
