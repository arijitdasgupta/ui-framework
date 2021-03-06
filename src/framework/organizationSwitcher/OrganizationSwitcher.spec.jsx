
import ReactDOM from 'react-dom';
import { TestCaseFactory } from 'react-test-kit';
import OrganizationSwitcher from './OrganizationSwitcher.jsx';
import SearchBox from '../searchBox/SearchBox.jsx';

describe('OrganizationSwitcher', () => {
  let testCase;

  afterEach(() => {
    // Forces component unmounting or else component from previous tests is
    // still is mounted in detached node
    if (testCase.dom.parentNode) {
      ReactDOM.unmountComponentAtNode(testCase.dom.parentNode);
    }
  });

  describe('Props', () => {
    describe('title', () => {
      it('is rendered into the title component', () => {
        const props = {
          title: 'Title text',
        };

        testCase = TestCaseFactory.create(OrganizationSwitcher, props);
        const titleEl = testCase.first('.organizationSwitcher__title');
        expect(titleEl.textContent).toContain(props.title);
      });
    });

    describe('searchPrompt', () => {
      it('is applied to input element', () => {
        const props = {
          onSearch: () => undefined,
          searchPrompt: 'Search placeholder',
        };

        testCase = TestCaseFactory.create(OrganizationSwitcher, props);
        const inputEl = testCase.first('input');
        expect(inputEl.getAttribute('placeholder')).toBe(props.searchPrompt);
      });
    });

    describe('onClose', () => {
      it('is called when the close button is clicked', () => {
        const props = {
          onClose: jasmine.createSpy('onClose'),
        };

        testCase = TestCaseFactory.create(OrganizationSwitcher, props);
        expect(props.onClose).not.toHaveBeenCalled();
        const closeButtonEl = testCase
          .first('.organizationSwitcher__closeButton');
        testCase.trigger('click', closeButtonEl);
        expect(props.onClose).toHaveBeenCalled();
      });
    });

    describe('onSearch', () => {
      it('creates a SearchBox component when present', () => {
        const props = {
          onSearch: () => undefined,
        };

        testCase = TestCaseFactory.create(OrganizationSwitcher, props);
        const searchBox = testCase.findComponents(SearchBox);
        expect(searchBox.length).toBe(1);
      });

      it('doesn\'t create a SearchBox component when not present', () => {
        testCase = TestCaseFactory.create(OrganizationSwitcher);
        const searchBox = testCase.findComponents(SearchBox);
        expect(searchBox.length).toBe(0);
      });
    });
  });

  describe('is-organization-switcher-open class', () => {
    it('is added on body when mounted', () => {
      testCase = TestCaseFactory.create(OrganizationSwitcher);
      expect(document.body.getAttribute('class'))
        .toContain('is-organization-switcher-open');
    });

    it('is removed from body when unmounted', () => {
      testCase = TestCaseFactory.create(OrganizationSwitcher);
      ReactDOM.unmountComponentAtNode(testCase.dom.parentNode);
      expect(document.body.getAttribute('class'))
        .not.toContain('is-organization-switcher-open');
    });
  });
});
