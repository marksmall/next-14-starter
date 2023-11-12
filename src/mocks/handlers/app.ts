import { HttpResponse, http } from 'msw';

import { getConfig } from '~/mocks/fixtures/app';
import { Http } from '~/utils/http';

const getAppConfig = http.get('*/api/path', () => {
  const config = getConfig();

  return HttpResponse.json(config, {
    status: Http.OK,
  });
});

const handlers = [getAppConfig];

export default handlers;
