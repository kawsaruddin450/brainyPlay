import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ToyCard from '../ToyCard/ToyCard';


const Shop = () => {
    const [AllToys, setAllToys] = useState([]);
    const [toys, setToys] = useState(AllToys);

    const handleCategories = category => {
        fetch(`http://localhost:5000/categories/${category}`)
        .then(res => res.json())
        .then(data => {
            setToys(data);
        })
    }

    const filterCategory = (index) => {
        if (index === 0) {
            setToys(AllToys);
        }
        else if (index === 1) {
            handleCategories("Science");
        }
        else if (index === 2) {
            handleCategories("Language");
        }
        else if (index === 3) {
            handleCategories("Engineering");
        }
        else if (index === 4) {
            handleCategories("STEM");
        }
        else if (index === 5) {
            handleCategories("Mathematics");
        }
        else if (index === 6) {
            handleCategories("Interactive Learning");
        }
        else if (index === 7) {
            handleCategories("Logic");
        }
        else if (index === 8) {
            handleCategories("Cognitive Development");
        }
        else if (index === 9) {
            handleCategories("Building");
        }
    }

    useEffect(() => {
        fetch('http://localhost:5000/toys')
            .then(res => res.json())
            .then(data => {
                setAllToys(data);
                setToys(data);
            })
    }, [])

    const changeIndex = (index) => {
        filterCategory(index);
    }

    return (
        <div className='my-28'>
            <h1 className='text-7xl font-bold text-center mb-12'>Shop Now</h1>
            <Tabs defaultIndex={0} onSelect={(index) => changeIndex(index)}>
                <TabList>
                    <Tab>All</Tab>
                    <Tab>Science</Tab>
                    <Tab>Language</Tab>
                    <Tab>Engineering</Tab>
                    <Tab>STEM</Tab>
                    <Tab>Mathematics</Tab>
                    <Tab>Interactive Learning</Tab>
                    <Tab>Logic</Tab>
                    <Tab>Cognitive Development</Tab>
                    <Tab>Building</Tab>
                </TabList>

                {/* All */}
                <TabPanel>
                    <div className='mt-8 lg:container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5'>
                        {
                            toys.map(toy => <ToyCard
                                key={toy._id}
                                toy={toy}
                            ></ToyCard>)
                        }
                    </div>
                </TabPanel>
                {/* Science */}
                <TabPanel>
                    <div className='mt-8 lg:container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5'>
                        {
                            toys.map(toy => <ToyCard
                                key={toy._id}
                                toy={toy}
                            ></ToyCard>)
                        }
                    </div>
                </TabPanel>
                {/* Language */}
                <TabPanel>
                    <div className='mt-8 lg:container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5'>
                        {
                            toys.map(toy => <ToyCard
                                key={toy._id}
                                toy={toy}
                            ></ToyCard>)
                        }
                    </div>
                </TabPanel>
                {/* Engineering */}
                <TabPanel>
                    <div className='mt-8 lg:container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5'>
                        {
                            toys.map(toy => <ToyCard
                                key={toy._id}
                                toy={toy}
                            ></ToyCard>)
                        }
                    </div>
                </TabPanel>
                {/* Stem */}
                <TabPanel>
                    <div className='mt-8 lg:container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5'>
                        {
                            toys.map(toy => <ToyCard
                                key={toy._id}
                                toy={toy}
                            ></ToyCard>)
                        }
                    </div>
                </TabPanel>
                {/* Mathematics */}
                <TabPanel>
                    <div className='mt-8 lg:container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5'>
                        {
                            toys.map(toy => <ToyCard
                                key={toy._id}
                                toy={toy}
                            ></ToyCard>)
                        }
                    </div>
                </TabPanel>
                {/* Interactive Learning */}
                <TabPanel>
                    <div className='mt-8 lg:container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5'>
                        {
                            toys.map(toy => <ToyCard
                                key={toy._id}
                                toy={toy}
                            ></ToyCard>)
                        }
                    </div>
                </TabPanel>
                {/* Logic */}
                <TabPanel>
                    <div className='mt-8 lg:container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5'>
                        {
                            toys.map(toy => <ToyCard
                                key={toy._id}
                                toy={toy}
                            ></ToyCard>)
                        }
                    </div>
                </TabPanel>
                {/* Cognitive Development */}
                <TabPanel>
                    <div className='mt-8 lg:container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5'>
                        {
                            toys.map(toy => <ToyCard
                                key={toy._id}
                                toy={toy}
                            ></ToyCard>)
                        }
                    </div>
                </TabPanel>
                {/* Building */}
                <TabPanel>
                    <div className='mt-8 lg:container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5'>
                        {
                            toys.map(toy => <ToyCard
                                key={toy._id}
                                toy={toy}
                            ></ToyCard>)
                        }
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Shop;