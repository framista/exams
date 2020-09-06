import { TOOGLE_THEME } from '../../../redux/types';

import { toogleTheme } from '../../../redux/theme/actions'

test('should generate toogle theme action object', () => {
    const action = toogleTheme();
    expect(action).toEqual({
        type: TOOGLE_THEME
    })
})