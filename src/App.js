import logo from './logo.svg';
import './App.css';
import { Document, PDFViewer, Page, Text, View, StyleSheet, Image, Link } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page1: {
    backgroundColor: 'yellow',
    padding: 20
  },
  heading: {
    fontSize: 40,
    marginBottom: 20
  }
})

function App() {
  return (
    <div className="App">
      <PDFViewer height={760} width={1200}>
        <MyPdf />
      </PDFViewer>
    </div>
  );
}

const MyPdf = () => {
  return (
    <Document title='Animals'>
      <Page size="A4" style={styles.page1}> 
        <View>
          <Text style={styles.heading}>What is a Panda?</Text>
          <Text>The giant panda (Ailuropoda melanoleuca), sometimes called a panda bear or simply panda, is a bear species endemic to China.[4] It is characterised by its bold black-and-white coat and rotund body. The name "giant panda" is sometimes used to distinguish it from the red panda, a neighboring musteloid. Though it belongs to the order Carnivora, the giant panda is a folivore, with bamboo shoots and leaves making up more than 99% of its diet.[5] Giant pandas in the wild occasionally eat other grasses, wild tubers, or even meat in the form of birds, rodents, or carrion. In captivity, they may receive honey, eggs, fish, yams, shrub leaves, oranges, or bananas along with specially prepared food.</Text>
          <Image src={{uri: "https://c02.purpledshub.com/uploads/sites/62/2023/01/Giant-panda-c2c51b8.jpg"}} />

          <Link href='https://en.wikipedia.org/wiki/Giant_panda'>Learn more about Pandas</Link>
        </View>
      </Page>   
      <Page size="A4">
        <View>
          <Text>What is a Penguin?</Text>
        </View>
      </Page>        
    </Document>    
  )
}

export default App;
