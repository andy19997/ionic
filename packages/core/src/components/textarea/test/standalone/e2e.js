
  const { register, navigate } = require('../../../../../scripts/e2e');

  describe('textarea/standalone', () => {

    register('should init', navigate('http://localhost:3333/src/components/textarea/test/standalone'));

  });
  