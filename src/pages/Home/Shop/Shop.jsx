import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ToyCard from '../ToyCard/ToyCard';


const Shop = () => {
    const [toys, setToys] = useState([]);

    useEffect(() => {
        fetch('/toys.json')
            .then(res => res.json())
            .then(data => setToys(data))
    }, [])

    return (
        <div className='my-28'>
            <h1 className='text-7xl font-bold text-center mb-12'>Shop Now</h1>
            <Tabs>
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
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5'>
                        {
                            toys.map(toy => <ToyCard
                                key={toy.id}
                                toy={toy}
                            ></ToyCard>)
                        }
                    </div>
                </TabPanel>
                {/* Science */}
                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
                {/* Language */}
                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
                {/* Engineering */}
                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
                {/* Stem */}
                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
                {/* Mathematics */}
                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
                {/* Interactive Learning */}
                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
                {/* Logic */}
                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
                {/* Cognitive Development */}
                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
                {/* Building */}
                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Shop;