import { useState, Fragment, ChangeEvent, FormEvent } from 'react';
import { IoSearchOutline } from 'react-icons/io5';
import { Listbox, Transition } from '@headlessui/react';
import { Filters, SortOption } from '../../types';
import Button from '../Button/Button';

const categories = [
  { name: 'All Categories' },
  { name: 'regular' },
  { name: 'featured' },
];

const sortOptions: SortOption[] = ['Price: Low to High', 'Price: High to Low'];

interface SearchSectionProps {
  onSearch: (searchText: string) => void;
  onFilter: (filters: Filters) => void;
  onSort: (sortOption: SortOption) => void;
}

const SearchSection: React.FC<SearchSectionProps> = ({ onSearch, onFilter, onSort }) => {
  const [searchText, setSearchText] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [selectedSort, setSelectedSort] = useState<SortOption>('Price: Low to High');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    onSearch(searchText);
  };

  const handleFilter = () => {
    onFilter({
      category: selectedCategory.name,
      minPrice,
      maxPrice,
    });
  };

  const handleSort = (option: SortOption) => {
    setSelectedSort(option);
    onSort(option);
  };

  const handleClearFilters = () => {
    setSearchText('');
    setSelectedCategory(categories[0]);
    setSelectedSort('Price: Low to High');
    setMinPrice('');
    setMaxPrice('');
    onSearch('');
    onFilter({
      category: 'All Categories',
      minPrice: '',
      maxPrice: '',
    });
    onSort('Price: Low to High');
  };

  return (
    <div>
      <div className="mt-6 flex flex-col md:flex-row justify-between items-center gap-2">

      <form onSubmit={handleSearch} className="bg-slate-100 p-4 rounded relative flex items-center border gap-2 w-full md:w-auto">
          <IoSearchOutline className="w-6 h-6 mr-2 text-slate-300" />
          <input
            className="bg-slate-100 outline-none w-full rounded"
            type="search"
            name="query"
            value={searchText}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setSearchText(e.target.value)}
            placeholder="Search Products"
            id="search"
          />
          <div className='w-4/12'><Button  label="Search" small rounded /></div>
          
        </form>
      
    <div>
    <div className="flex flex-col md:flex-row mt-4 md:mt-0 items-center gap-2 w-full md:w-auto lg:w-1/3">
          <input
            type="number"
            value={minPrice}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setMinPrice(e.target.value)}
            placeholder="Min Price"
            className="bg-slate-100 outline-none w-full rounded"
          />
          <input
            type="number"
            value={maxPrice}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setMaxPrice(e.target.value)}
            placeholder="Max Price"
            className="bg-slate-100 outline-none w-full rounded"
          />
        </div>
    </div>
      
        <Listbox value={selectedCategory} onChange={setSelectedCategory}>
          <div className="relative mt-1 w-full md:w-auto">
            <Listbox.Button className="relative w-full p-3 bg-slate-400  hover:bg-slate-300 rounded shadow cursor-default text-center text-slate-100">
              {selectedCategory.name}
            </Listbox.Button>
            <Transition
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute w-full py-1 mt-1 bg-slate-100 rounded shadow max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
                {categories.map((category, idx) => (
                  <Listbox.Option
                    key={idx}
                    value={category}
                    className={({ active }) =>
                      `${active ? 'text-slate-800 bg-slate-100' : 'text-slate-700'}
                          cursor-default select-none relative py-2 pl-10 pr-4`
                    }
                  >
                    {category.name}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </Listbox>
       
      <div className='flex gap-2'>
      <Button label="Apply Filters" small onClick={handleFilter} />
      <Button label="Clear Filters" small onClick={handleClearFilters} />
      </div>

      <Listbox value={selectedSort} onChange={handleSort}>
          <div className="relative mt-1 w-full md:w-auto">
            <Listbox.Button className="relative w-full p-3 bg-slate-400  hover:bg-slate-300 rounded shadow cursor-default text-center text-slate-100">
              {selectedSort}
            </Listbox.Button>
            <Transition
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute w-full py-1 mt-1 bg-slate-100 rounded-md shadow max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
                {sortOptions.map((option, idx) => (
                  <Listbox.Option
                    key={idx}
                    value={option}
                    className={({ active }) =>
                      `${active ? 'text-slate-800 bg-slate-100' : 'text-slate-700'}
                          cursor-default select-none relative py-2 pl-10 pr-4`
                    }
                  >
                    {option}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </Listbox>
      </div>
    </div>
  );
};

export default SearchSection;
